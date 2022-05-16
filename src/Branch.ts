import Element from './Element.js';
import { random } from './main.js';

type BranchProps = ElementProps & {
  rotation: number;
  width: number;
  height: number;
  bottom?: string;
};

class Branch extends Element {
  rotation = 0;
  width = 0;
  height = 0;
  bottom? = '95%';

  constructor(props: BranchProps) {
    super(props);

    const { rotation, width, height, bottom } = props;

    this.rotation = rotation;
    this.width = width;
    this.height = height;
    this.bottom = bottom;

    this.updateStyle({ rotation, width, height, bottom });
  }

  updateStyle = ({ rotation, width, height, bottom }: BranchProps) => {
    this.setStyle([
      ['width', `${width}px`],
      ['height', `${height}px`],
      ['bottom', bottom || '95%'],
      ['transform', `rotate(${rotation}deg) translate(-50%)`],
      ['position', 'absolute'],
      ['left', '50%'],
      ['transformOrigin', 'bottom'],
      ['backgroundColor', '#000'],
      ['borderTopLeftRadius', '27%'],
      ['borderTopRightRadius', '27%'],
    ]);
  };
}

export default Branch;
