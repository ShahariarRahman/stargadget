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

const concatParentPathAtChildNav = (parent) => {
  return parent.children
    ? {
        ...parent,
        children: parent.children.map(({ navPath, ...rest }) => ({
          navPath: `${parent.navPath}/${navPath}`,
          ...rest,
        })),
      }
    : parent;
};

const findParentAtEndpoint = (
  navItems,
  navPaths,
  parent = {},
  breadcrumbItems = []
) => {
  if (!navPaths) {
    parent.breadcrumbItems = breadcrumbItems;
    return parent;
  }
  if (navPaths.length === 0) {
    parent.breadcrumbItems = breadcrumbItems;
    return parent;
  }
  const [currPath, ...restPaths] = navPaths;

  const parentPath = parent.navPath;
  const parentNavItem = navItems.find(({ navPath }) => {
    return parentPath
      ? `${navPath}` === `${parentPath}/${currPath}`
      : navPath === currPath;
  });

  if (!parentNavItem) {
    return {};
  }

  const parentNavChildWithParentPath =
    concatParentPathAtChildNav(parentNavItem);

  const { navPath, navLabel } = parentNavChildWithParentPath;

  breadcrumbItems.push({
    title: navLabel,
    path: navPath,
  });

  return findParentAtEndpoint(
    parentNavChildWithParentPath.children || [],
    restPaths,
    parentNavChildWithParentPath,
    breadcrumbItems
  );
};

const makeQuery = (query, pathname) => {
  const { category, ...filterQuery } = query;
  let queryPath = "";
  Object.entries(filterQuery).forEach(([key, value], index) => {
    index === 0
      ? (queryPath += `?${key}=${value}`)
      : (queryPath += `&${key}=${value}`);
  });
  return pathname?.includes("category")
    ? `${category.join("/")}/${queryPath}`
    : queryPath;
};

export const helpers = {
  getFlattenPath,
  findParentAtEndpoint,
  makeQuery,
};
