import template from './presentationalIndex.js';

describe('presentatioanl index template', () => {
  it('should return template string', () => {
    const expected = `import Name from './Name';

export default Name;
`;
    expect(template('Name')).toBe(expected);
  })

  it('throws when template name is not passed', () => {
    expect(() => template()).toThrow();
  })
})