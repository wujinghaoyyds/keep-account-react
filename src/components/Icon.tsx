import React from 'react';
import classname from 'classnames';

let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
    requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
    name?: string
} & React.SVGAttributes<SVGElement>

const Icon = (props: Props) => {
    const {name, children, className, ...reset} = props;
    return (
        <svg className={classname('icon', className)}{...reset}>
            <use xlinkHref={'#' + props.name}/>
        </svg>
    );
};

export default Icon;