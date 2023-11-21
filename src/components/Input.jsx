import React, { memo, useMemo } from 'react';

export const Input = memo(({ defaultValue, onChange }) => {
  const memoOnChange = useMemo(() => onChange, [onChange]);

  return (
    <input
      type="text"
      value={defaultValue}
      onChange={memoOnChange}
      style={{
        width: '200px',
        padding: '10px',
        background: 'grey',
      }}
    />
  );
});




