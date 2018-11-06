export default function onLogOut() {
  return state => ({
    ...state,
    user: null
  });
}
