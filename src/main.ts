import './style.css';

const ground = document.querySelector<HTMLDivElement>('#ground')!;

const random = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

const createBranch = (
  rotation: number,
  size: number,
  width: number,
  bottom: string = '90%'
): HTMLDivElement => {
  const newBranch = document.createElement('div');

  newBranch.style.backgroundColor = '#000';
  newBranch.style.width = `${width}px`;
  newBranch.style.height = `${size}px`;

  newBranch.style.position = 'absolute';
  newBranch.style.left = '50%';
  newBranch.style.bottom = bottom;

  newBranch.style.transformOrigin = 'bottom';

  newBranch.style.transform = `rotate(${
    rotation * random(0.8, 1.5)
  }deg) translate(-50%)`;

  return newBranch;
};

const fertilizeTree = (
  size: number,
  branches: HTMLDivElement[],
  branchSize: number,
  branchWidth: number,
  rotation: number
) => {
  if (branches?.length > size) return;

  const newBranches = [];

  for (const branch of branches) {
    const leftBranch = createBranch(
      -rotation,
      branchSize * random(0.6, 0.85),
      branchWidth * random(0.6, 0.85)
    );
    const middleBranch = createBranch(
      random(-15, 15),
      branchSize * random(0.95, 1.05),
      branchWidth * random(0.95, 1.05)
    );
    const rightBranch = createBranch(
      rotation,
      branchSize * random(0.6, 0.85),
      branchWidth * random(0.6, 0.85)
    );

    branch.append(leftBranch, middleBranch, rightBranch);

    newBranches.push(leftBranch, middleBranch, rightBranch);
  }

  fertilizeTree(
    size,
    newBranches,
    branchSize * random(0.6, 0.85),
    branchWidth * random(0.45, 0.55),
    rotation * random(0.85, 1)
  );
};

const mainBranchSize = random(100, 160);
const mainBranchWidth = random(25, 30);

const tree = createBranch(0, mainBranchSize, mainBranchWidth, '0');

ground.append(tree);

fertilizeTree(
  3200,
  [tree],
  mainBranchSize,
  mainBranchWidth * random(0.5, 0.65),
  random(25, 29)
);
