export const selectLibrary = (libraryId) => {
  console.log("select library" + libraryId)
  return {
    type: 'select_library',
    payload: libraryId
  }
}