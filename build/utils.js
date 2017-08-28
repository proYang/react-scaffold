const incstr = require('incstr');

/**
 * @desc 极限压缩css类名
 * @link https://zhuanlan.zhihu.com/p/28019808
 *  
 */
const createUniqueIdGenerator = () => {
  const index = {};
  const generateNextId = incstr.idGenerator({
    // Removed "d" letter to avoid accidental "ad" construct.
    // @see https://medium.com/@mbrevda/just-make-sure-ad-isnt-being-used-as-a-class-name-prefix-or-you-might-suffer-the-wrath-of-the-558d65502793
    alphabet: 'abcefghijklmnopqrstuvwxyz0123456789'
  });
  return (name) => {
    if (index[name]) {
      return index[name];
    }
    let nextId;
    do {
      // Class name cannot start with a number.
      nextId = generateNextId();
    } while (/^[0-9]/.test(nextId));
    index[name] = generateNextId();
    return index[name];
  };
};
const uniqueIdGenerator = createUniqueIdGenerator();
const generateScopedName = (localName, resourcePath) => {
  const componentName = resourcePath.split('/').slice(-2, -1);
  return uniqueIdGenerator(componentName) + '_' + uniqueIdGenerator(localName);
};

exports.generateScopedName = generateScopedName