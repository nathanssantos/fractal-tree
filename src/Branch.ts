import Element from './Element.js';
import { random } from './main.js';

type BranchProps = ElementProps & {
  rotation: number;
  width: number;
  size: number;
  bottom?: string;
};

class Branch extends Element {
  constructor(props: BranchProps) {
    super(props);

    const { rotation, width, size, bottom } = props;

    this.target.style.backgroundColor = '#000';
    this.target.style.width = `${width}px`;
    this.target.style.height = `${size}px`;

    this.target.style.borderTopLeftRadius = '27%';
    this.target.style.borderTopRightRadius = '27%';

    this.target.style.position = 'absolute';
    this.target.style.left = '50%';
    this.target.style.bottom = bottom || '95%';

    this.target.style.transformOrigin = 'bottom';

    this.target.style.transform = `rotate(${
      rotation * random(0.8, 1.5)
    }deg) translate(-50%)`;
  }
}

export default Branch;
