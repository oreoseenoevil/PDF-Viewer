import { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';
import './Viewer.css';

interface ViewerProps {
  value: string;
}

export const Viewer = ({ value }: ViewerProps) => {
  const viewerDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    WebViewer(
      {
        path: 'lib',
        initialDoc: value
      },
      viewerDiv.current as HTMLDivElement
    );
  }, [value]);

  return <div className="webviewer" ref={viewerDiv} />;
};
