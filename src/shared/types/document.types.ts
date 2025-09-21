export interface DocumentDTO { id: string; title: string; status: string; createdAt: string; }
export type DocumentStatus = 'draft' | 'active' | 'archived' | 'in-review' | 'pending';
