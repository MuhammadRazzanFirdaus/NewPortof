import { useEffect } from 'react';

export function useSpinBorder(wrapRef) {
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const reduced = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    const hoverable = window.matchMedia('(hover:hover)').matches;
    if (!hoverable || window.innerWidth <= 768 || reduced) return;

    const NS = 'http://www.w3.org/2000/svg';
    const R = 12;
    const W = wrap.offsetWidth;
    const H = wrap.offsetHeight;
    if (!W || !H) return;

    const perim = 2 * (W - 2 * R) + 2 * (H - 2 * R) + 2 * Math.PI * R;
    const arcLen = perim * 0.15;
    const gapLen = perim - arcLen;

    // SVG element
    const svg = document.createElementNS(NS, 'svg');
    svg.classList.add('spin-border');
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.setAttribute('aria-hidden', 'true');

    const rect = document.createElementNS(NS, 'rect');
    rect.setAttribute('x', '0.75');
    rect.setAttribute('y', '0.75');
    rect.setAttribute('width', String(W - 1.5));
    rect.setAttribute('height', String(H - 1.5));
    rect.setAttribute('rx', String(R));
    rect.setAttribute('ry', String(R));
    rect.setAttribute('fill', 'none');
    rect.setAttribute('stroke', 'var(--spin-clr)');
    rect.setAttribute('stroke-width', '1.5');
    rect.setAttribute('stroke-linecap', 'round');
    rect.setAttribute('stroke-dasharray', `${arcLen} ${gapLen}`);
    rect.setAttribute('stroke-dashoffset', String(perim));

    const BASE_DUR = '3.5s';
    const HOVER_DUR = '1.6s';
    const anim = document.createElementNS(NS, 'animate');
    anim.setAttribute('attributeName', 'stroke-dashoffset');
    anim.setAttribute('from', String(perim));
    anim.setAttribute('to', '0');
    anim.setAttribute('dur', BASE_DUR);
    anim.setAttribute('repeatCount', 'indefinite');
    anim.setAttribute('calcMode', 'linear');

    rect.appendChild(anim);
    svg.appendChild(rect);
    wrap.appendChild(svg);

    const speedUp = () => anim.setAttribute('dur', HOVER_DUR);
    const slowDown = () => anim.setAttribute('dur', BASE_DUR);
    wrap.addEventListener('mouseenter', speedUp);
    wrap.addEventListener('mouseleave', slowDown);

    return () => {
      wrap.removeEventListener('mouseenter', speedUp);
      wrap.removeEventListener('mouseleave', slowDown);
      svg.remove();
    };
  }, [wrapRef]);
}
