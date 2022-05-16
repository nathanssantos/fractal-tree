import Element from './Element.js';

type LeafProps = ElementProps & {
  rotation: number;
  width: number;
  height: number;
  bottom?: number;
};

class Leaf extends Element {
  rotation = 0;
  width = 0;
  height = 0;
  bottom? = 95;

  constructor(props: LeafProps) {
    super(props);
    const { rotation, width, height, bottom = 95 } = props;

    this.rotation = rotation;
    this.width = width;
    this.height = height;
    this.bottom = bottom;

    this.setStyle([
      ['width', `${width}px`],
      ['height', `${height}px`],
      ['bottom', `${bottom}%`],
      ['transform', `rotate(${rotation}deg) translate(-50%)`],
      ['position', 'absolute'],
      ['left', '50%'],
      ['transformOrigin', 'bottom'],
      ['backgroundColor', 'green'],
      ['borderRadius', '50%'],
    ]);
  }
}

export default Leaf;
