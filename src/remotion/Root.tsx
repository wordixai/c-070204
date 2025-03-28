
import { Composition } from 'remotion';
import { TechVideo } from './compositions/TechVideo';
import './remotion.css';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="TechVideo"
        component={TechVideo}
        durationInFrames={600}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
