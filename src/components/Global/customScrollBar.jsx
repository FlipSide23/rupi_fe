import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export const customScrollBar = () => {
  return (
    <SimpleBar style={{ maxHeight: '500px' }}>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Custom Scrollbar</h2>
        {/* Your content goes here */}
      </div>
    </SimpleBar>
  );
}
