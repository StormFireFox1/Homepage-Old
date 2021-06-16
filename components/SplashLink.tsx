import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface SplashLinkProps {
    icon: IconDefinition;
    entry: string;
    url: string;
}

const SplashLink = (props: SplashLinkProps) => {
  const { icon, entry, url } = props;
  return (
    <Link href={url}>
      <a className="block my-3">
        <FontAwesomeIcon icon={icon} className="mr-1" />
        {entry}
      </a>
    </Link>
  );
};

export default SplashLink;
