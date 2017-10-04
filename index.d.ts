/// <reference types="react" />
/// <reference types="angular" />
import { IComponentOptions } from 'angular';
import * as React from 'react';
/**
 * Wraps a React component in Angular. Returns a new Angular component.
 *
 * Usage:
 *
 *   ```ts
 *   type Props = { foo: number }
 *   class ReactComponent extends React.Component<Props, S> {}
 *   const AngularComponent = react2angular(ReactComponent, ['foo'])
 *   ```
 */
export declare function react2angular<Props>(Class: React.ComponentClass<Props> | React.SFC<Props>, bindingNames?: (keyof Props)[]): IComponentOptions;
