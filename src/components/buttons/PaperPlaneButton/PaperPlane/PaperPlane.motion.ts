export const motionWrapper = (state: boolean) => {
  return {
    initial: 'inactive',
    animate: state ? 'inactive' : 'active',
    variants: variantsWrapper,
  };
};

const variantsWrapper = {
  inactive: { x: 0, y: 0, scale: 1 },
  active: {
    x: 80,
    y: -80,
    scale: 2,
    transition: { ease: 'easeIn' },
  },
};
