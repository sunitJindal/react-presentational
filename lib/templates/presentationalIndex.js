module.exports = function(componentName) {
  if (!componentName) {
    throw new Error('Template name is required')
  }
  return `import ${componentName} from './${componentName}';

export default ${componentName};
`;
}