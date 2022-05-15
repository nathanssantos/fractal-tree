class Element {
  target: HTMLDivElement = document.createElement('div');
  className?: string | null;

  constructor(props: ElementProps) {
    const { className } = props;

    if (className?.length) {
      const classNameList = className.split(' ');
      for (const name of classNameList) this.target.classList.add(name);
      this.className = className;
    }
  }

  setStyle = (prop: string, value: string) => {
    this.target.style[prop as any] = value;
  };

  destroy = () => {
    this.target.parentNode && this.target.parentNode.removeChild(this.target);
  };
}

export default Element;
