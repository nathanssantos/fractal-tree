type SetStyleParam = [prop: string, value: string];

class Element {
  target: HTMLDivElement = document.createElement('div');
  className?: string | null;
  rotation = 0;
  width = 0;
  height = 0;
  bottom? = 95;

  constructor(props: ElementProps) {
    const { className } = props;

    if (className?.length) {
      const classNameList = className.split(' ');
      for (const name of classNameList) this.target.classList.add(name);
      this.className = className;
    }
  }

  setStyle = (params: SetStyleParam[]) => {
    params.forEach(([prop, value]) => {
      this.target.style[prop as any] = value;
    });
  };

  destroy = () => {
    this.target.parentNode && this.target.parentNode.removeChild(this.target);
  };
}

export default Element;
