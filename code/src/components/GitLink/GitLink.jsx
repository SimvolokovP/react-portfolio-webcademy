import { useRef } from 'react';
import gitImg from '../../assets/img/icons/gitHub-black.svg';

export default function GitLink({ link }) {
    const linkRef = useRef(null);

    return (
        <a ref={linkRef} rel="noreferrer" target='_blank' href={link} className="btn-outline">
            <img src={gitImg} alt="github" />
            GitHub repo
        </a>
    );
}