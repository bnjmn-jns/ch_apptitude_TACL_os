export const getStatusColor = (status, theme) =>
  status && status !== 'inProgress' ? theme.base.colors[status] : theme.base.colors.secondary;
