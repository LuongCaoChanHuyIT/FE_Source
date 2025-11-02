// types/pinia-plugin.d.ts
import 'pinia'

declare module 'pinia' {
  // Strategy type giống cấu hình plugin pinia-plugin-persistedstate
  type PersistStrategy = {
    key?: string
    storage?: Storage
    paths?: string[]
  }

  // Mở rộng DefineStoreOptions để chấp nhận `persist`
  // Dùng generic cho tương thích với nhiều phiên bản Pinia
  interface DefineStoreOptions<Id, S, G, A> {
    persist?:
      | boolean
      | {
          enabled?: boolean
          strategies?: PersistStrategy[]
        }
      | PersistStrategy[]
  }

  // Nếu dùng kiểu setup store (defineStore(id, () => {...})), Pinia cũng có options thứ 3,
  // mở rộng thêm interface DefineSetupStoreOptions nếu cần (an toàn hơn)
  interface DefineSetupStoreOptions<Id, S, G, A> {
    persist?:
      | boolean
      | {
          enabled?: boolean
          strategies?: PersistStrategy[]
        }
      | PersistStrategy[]
  }
}
