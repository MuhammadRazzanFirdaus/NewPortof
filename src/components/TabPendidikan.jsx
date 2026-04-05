import { EDUCATION } from '../data';

export default function TabPendidikan() {
  return (
    <ul className="timeline" role="list">
      {EDUCATION.map(item => (
        <li className="tl-item" key={item.id}>
          <div className="tl-dot" aria-hidden="true" />
          <time className="tl-year" dateTime={item.year}>
            {item.year}
          </time>
          <h3 className="tl-title">{item.title}</h3>
          <p className="tl-inst">{item.inst}</p>
          <p className="tl-desc">{item.desc}</p>
        </li>
      ))}
    </ul>
  );
}
