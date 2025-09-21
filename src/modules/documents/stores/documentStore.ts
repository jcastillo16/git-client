import { defineStore } from 'pinia';

export interface Document {
  id: string;
  title: string;
  status: string;
  createdAt: string | Date;
}

interface State { documents: Document[]; loading: boolean; }

export const useDocumentStore = defineStore('documents', {
  state: (): State => ({ documents: [], loading: false }),
  getters: {
    recentDocuments: (state) => [...state.documents].sort((a,b)=> new Date(b.createdAt as any).getTime() - new Date(a.createdAt as any).getTime())
  },
  actions: {
    async fetchDocuments() {
      this.loading = true;
      try {
        // Placeholder fetch logic
        this.documents = [
          { id: '1', title: 'Contrato Marco', status: 'active', createdAt: new Date().toISOString() }
        ];
      } finally { this.loading = false; }
    }
  }
});
