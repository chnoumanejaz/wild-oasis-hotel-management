import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://zxumgmkfxdffacoxezbi.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4dW1nbWtmeGRmZmFjb3hlemJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0OTIxMDMsImV4cCI6MjAxMDA2ODEwM30.YRkAgYYTLAWU3PME5S4i66ZpMhpoBt7D3NeorJTD-ys';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
