import React from 'react';
import './importIcons';
import './icon.scss'

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { className, name, ...restProps } = props;
  return (
    <span>
      <svg className='fui-icon' onClick={props.onClick}
           {...restProps}
      >
        <use xlinkHref={`#${name}`}/>
      </svg>
    </span>
  );
};

export default Icon;
