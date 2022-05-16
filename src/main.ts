import Branch from './Branch';
import './style.css';

const ground = document.querySelector<HTMLDivElement>('#ground')!;

export const random = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

const grow = (
  size: number,
  branches: Branch[],
  branchSize: number,
  branchWidth: number,
  rotation: number
) => {
  if (branches?.length > size) return;

  const newBranches = [];

  for (const branch of branches) {
    const leftBranch = new Branch({
      rotation: -rotation,
      height: branchSize * random(0.6, 0.8),
      width: branchWidth * random(0.6, 0.8),
    });

    const middleBranch = new Branch({
      rotation: random(-12, 12),
      height: branchSize * random(0.8, 0.9),
      width: branchWidth * random(0.7, 0.8),
    });

    const rightBranch = new Branch({
      rotation,
      height: branchSize * random(0.6, 0.8),
      width: branchWidth * random(0.6, 0.8),
    });

    branch.target.append(
      leftBranch.target,
      middleBranch.target,
      rightBranch.target
    );

    newBranches.push(leftBranch, middleBranch, rightBranch);
  }

  grow(
    size,
    newBranches,
    branchSize * random(0.7, 0.85),
    branchWidth * random(0.5, 0.65),
    rotation
  );
};

const mainBranchSize = random(150, 225);
const mainBranchWidth = random(30, 45);

const tree = new Branch({
  rotation: 0,
  height: mainBranchSize,
  width: mainBranchWidth,
  bottom: '0',
});

ground.append(tree.target);

grow(
  640,
  [tree],
  mainBranchSize * random(0.85, 0.95),
  mainBranchWidth * random(0.55, 0.7),
  random(27, 32)
);
