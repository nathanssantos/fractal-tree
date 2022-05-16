import Branch from './Branch';
import { random } from './utils';
import './style.css';
import Leaf from './Leaf';

type CreateTreeParams = {
  size: number;
  branches: Branch[];
  branchWidth: number;
  branchHeight: number;
  rotation: number;
};

let index = 0;

const createLeaves = (branches: Branch[], leafAmount: number) => {
  for (const branch of branches) {
    for (let i = 0; i < leafAmount; i++) {
      const leafSide = random(0, 2) > 1 ? 'left' : 'right';

      const newLeaf = new Leaf({
        rotation: leafSide === 'left' ? -random(0, 32) : random(0, 32),
        width: branch.width * 0.7,
        height: branch.height * 0.5,
        bottom: random(30, 100),
      });

      branch.target.append(newLeaf.target);
    }
  }
};

const createTree = ({
  size,
  branches,
  branchWidth,
  branchHeight,
  rotation,
}: CreateTreeParams) => {
  if (index >= size) {
    createLeaves(branches, 12);
    return;
  }

  const newBranches = [];

  for (const branch of branches) {
    const leftBranch = new Branch({
      rotation: -rotation,
      width: branchWidth * random(0.6, 0.8),
      height: branchHeight * random(0.6, 0.8),
    });

    const middleBranch = new Branch({
      rotation: random(-12, 12),
      width: branchWidth * random(0.7, 0.8),
      height: branchHeight * random(0.8, 0.9),
    });

    const rightBranch = new Branch({
      rotation,
      width: branchWidth * random(0.6, 0.8),
      height: branchHeight * random(0.6, 0.8),
    });

    branch.target.append(
      leftBranch.target,
      middleBranch.target,
      rightBranch.target
    );

    newBranches.push(leftBranch, middleBranch, rightBranch);
  }

  index++;

  createTree({
    size,
    branches: newBranches,
    branchHeight: branchHeight * random(0.7, 0.85),
    branchWidth: branchWidth * random(0.55, 0.7),
    rotation: rotation * random(0.95, 1.05),
  });
};

const mainBranchWidth = random(30, 45);
const mainBranchHeight = random(150, 225);

const mainBranch = new Branch({
  rotation: 0,
  width: mainBranchWidth,
  height: mainBranchHeight,
  bottom: 0,
});

createTree({
  size: 6,
  branches: [mainBranch],
  branchWidth: mainBranchWidth * random(0.55, 0.7),
  branchHeight: mainBranchHeight * random(0.85, 0.95),
  rotation: random(27, 32),
});

document.querySelector<HTMLDivElement>('#ground')?.append(mainBranch.target);
