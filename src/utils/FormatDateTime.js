// export default function formatDateTime(dateTimeString) {
//   const dateTime = new Date(dateTimeString)
//   const now = new Date()
//   const timeDiff = now - dateTime

//   if (timeDiff < 24 * 60 * 60 * 1000) {
//     const hoursAgo = Math.floor(timeDiff / (60 * 60 * 1000))
//     if (hoursAgo > 0) {
//       return `${hoursAgo} jam yang lalu`
//     } else {
//       const minutesAgo = Math.floor(timeDiff / (60 * 1000))
//       return `${minutesAgo} menit yang lalu`
//     }
//   } else {
//     const options = { year: "numeric", month: "long", day: "numeric" }
//     return dateTime.toLocaleDateString(undefined, options)
//   }
// }

import { parseISO, formatDistance } from "date-fns"
import { id } from "date-fns/locale"

export default function formatDateTime(dateNow) {
  const date = parseISO(dateNow)
  return formatDistance(date, new Date(), { addSuffix: true, locale: id })
}
