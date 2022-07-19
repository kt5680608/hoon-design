export interface SkeletonProps {
  type: 'rect' | 'circle';
  height?: string;
  width?: string;
  margin?: string;
  padding?: string;
  diameter?: string;
  borderRadius?: string;
}

export interface SkeletonBlurProps {
  type?: 'rect' | 'circle';
  width?: string;
  height?: string;
  diameter?: string;
}
