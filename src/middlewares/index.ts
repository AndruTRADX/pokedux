// export const logger = (store: unknown) => {
//   return (next: any) => {
//     (action: unknown) => {
//       console.log(action)
//       next(action)
//     } 
//   }
// }

// export const featuring = (store: unknown) => {
//   return (next: any) => {
//     return (actionNew: any) => {
//       const featured = [
//         { name: 'Momea', url: 'https://ab.c' }, 
//         ...actionNew.payload,
//       ]
//       const updatedAction = {
//         ...actionNew,
//         payload: [
//           ...featured,
//         ]
//       }
//       next(updatedAction)
//     } 
//   }
// }