import { useState, useEffect, useRef } from 'react';
import { HARD_SKILLS, SOFT_SKILLS } from '../../data';

export default function TabSkill({ active }) {
  const [bars, setBars] = useState(HARD_SKILLS.map(() => 0));
  const [pcts, setPcts] = useState(HARD_SKILLS.map(() => 0));
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!active) {
      setBars(HARD_SKILLS.map(() => 0));
      setPcts(HARD_SKILLS.map(() => 0));
      hasAnimated.current = false;
      return;
    }

    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const reduced = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    if (reduced) {
      setBars(HARD_SKILLS.map(s => s.pct));
      setPcts(HARD_SKILLS.map(s => s.pct));
      return;
    }

    const DURATION = 1200;
    const easeOut = t => 1 - Math.pow(1 - t, 3);
    const t0 = performance.now();

    const frame = (now) => {
      const p = Math.min((now - t0) / DURATION, 1);
      const e = easeOut(p);
      setBars(HARD_SKILLS.map(s => s.pct * e));
      setPcts(HARD_SKILLS.map(s => Math.round(s.pct * e)));
      if (p < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [active]);

  return (
    <div className="skill-cols">

      <section className="skill-group">
        <h3>Hard Skills</h3>
        {HARD_SKILLS.map((skill, i) => (
          <div className="skill-item" key={skill.name}>
            <div className="skill-top">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-pct">{pcts[i]}%</span>
            </div>
            <div className="skill-bar" role="progressbar" aria-valuenow={pcts[i]} aria-valuemin={0} aria-valuemax={100} aria-label={skill.name}>
              <div
                className="skill-fill"
                style={{ width: `${bars[i]}%`, transition: active ? 'none' : undefined }}
              />
            </div>
          </div>
        ))}
      </section>

      <section className="skill-group">
        <h3>Soft Skills</h3>
        <ul className="soft-tags">
          {SOFT_SKILLS.map(skill => (
            <li className="soft-tag" key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

    </div>
  );
}
