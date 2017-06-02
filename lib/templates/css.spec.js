import template from './css.js';

describe('css template', () => {
  it('should return template string', () => {
    expect(template('Name')).toBe('.Name {}')
  })

  it('throws when template name is not passed', () => {
    expect(() => template()).toThrow();
  })
})