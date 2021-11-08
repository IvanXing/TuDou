import React from 'react';
import './importIcons';
import './icon.scss'

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>
      <svg className='fui-icon' onClick={props.onClick}
           {...props}
      >
        <use xlinkHref={`#${props.name}`}/>
      </svg>
    </span>
  );
};

export default Icon;
