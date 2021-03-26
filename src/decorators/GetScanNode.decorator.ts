/* eslint-disable @typescript-eslint/no-explicit-any */

import { IScanNode } from '../utils';

export function GetScanNode():PropertyDecorator {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (target: object, propertyKey: string | symbol) => {
    const descriptor:PropertyDescriptor = {
      get():IScanNode {
        return (this as any).$scanNode;
      },
    };

    Object.defineProperty(target, propertyKey, descriptor);
    return descriptor;
  }
}
