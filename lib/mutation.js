exports.handleMutation = (request, value, mutate) => {
  if (mutate && typeof value === 'object' && value !== null) {
    Object.keys(value).forEach(parameter => {
      Object.defineProperty(request, parameter, { value: value[parameter], enumerable: true });
    });
  }

  return null;
};
