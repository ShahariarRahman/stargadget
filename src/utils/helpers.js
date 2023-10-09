const getFlattenPath = (navItems, parentPath = "") => {
  const flattenPath = [];
  navItems.forEach(({ navPath, children }) => {
    const slug = parentPath ? [parentPath, navPath] : [navPath];
    flattenPath.push(slug);
    if (children) {
      flattenPath.push(...getFlattenPath(children, navPath));
    }
  });
  return flattenPath;
};

export const helpers = {
  getFlattenPath,
};
