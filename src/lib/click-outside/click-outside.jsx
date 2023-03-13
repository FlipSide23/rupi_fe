import React, { useRef, useEffect, forwardRef } from 'react';
import { mergeRefs } from 'react-merge-refs';

import hasParent from './has-parent';

/**
 * Use forward ref to allow this component to be used with other components like
 * focus-trap-react, that rely on the same type of ref forwarding to direct children
 */
const ClickOutside = forwardRef(
  ({ active = true, onClick, children }, forwardedRef) => {
    const innerRef = useRef();

    const child = children
      ? React.Children.only(children)
      : undefined;

    if (!child || child.type === React.Fragment) {
      /**
       * React Fragments can't be used, as it would not be possible to pass the ref
       * created here to them.
       */
      throw new Error(
        'A valid non Fragment React Children should be provided',
      );
    }

    if (typeof onClick !== 'function') {
      throw new Error('onClick must be a valid function');
    }

    const handleClick = event => {
      /**
       * Check if the clicked element is contained by the top level tag provided to the
       * ClickOutside component, if not, Outside clicked! Fire onClick cb
       */
      if (!hasParent(event.target, innerRef?.current)) {
        onClick(event);
      }
    };

    useEffect(() => {
      if (active) {
        document.addEventListener('mousedown', handleClick);
        document.addEventListener('touchstart', handleClick);
      }
      return () => {
        if (active) {
          document.removeEventListener('mousedown', handleClick);
          document.removeEventListener('touchstart', handleClick);
        }
      };
    });

    /**
     * Preserve the child ref prop if exists and merge it with the one used here and the
     * proxied by the forwardRef method
     */
    const composedRefCallback = element => {
      if (typeof child.ref === 'function') {
        child.ref(element);
      } else if (child.ref) {
        child.ref.current = element;
      }
    };

    return React.cloneElement(child, {
      ref: mergeRefs([composedRefCallback, innerRef, forwardedRef]),
    });
  },
);

ClickOutside.displayName = 'ClickOutside';
export default ClickOutside;
