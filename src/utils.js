const mapThemCommentsSon = (arr, childComments) => {
  const newArr = arr.map(c => {
    const children = c.children || []
    const child = childComments.filter(co => c.id === co.parent_id)[0]
    if ((child || {}).id) {
      children.push(child)
    }

    return {
      ...c,
      children
    }
  })

  return newArr
}

export const fixComments = comments =>
  mapThemCommentsSon(
    comments.filter(c => !c.parent_id),
    comments.filter(c => c.parent_id)
  )
