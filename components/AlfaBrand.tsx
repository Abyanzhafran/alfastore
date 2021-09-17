import { HTMLAttributes } from 'react';

const AlfaBrand = ({ ...props }: HTMLAttributes<HTMLElement>) => (
  <div {...props}>
    <span className="text-xl leading-7 font-bold text-gray-900">Alfastore</span>
  </div>
);

export default AlfaBrand;
