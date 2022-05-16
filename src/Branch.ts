import Element from './Element.js';

class Branch extends Element {
  constructor(props: ElementProps) {
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
      ['backgroundColor', '#261709'],
      ['borderTopLeftRadius', '27%'],
      ['borderTopRightRadius', '27%'],
    ]);
  }
}

export default Branch;
