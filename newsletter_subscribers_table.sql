-- Create newsletter_subscribers table
CREATE TABLE newsletter_subscribers (
  id BIGSERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE
);

-- Create index for faster queries
CREATE INDEX idx_newsletter_subscribers_email ON newsletter_subscribers(email);

-- Enable Row Level Security (RLS)
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow select for authenticated users only
CREATE POLICY "Allow authenticated select access" ON newsletter_subscribers
  FOR SELECT TO authenticated USING (true);

-- Create policy to allow insert for everyone (anyone can subscribe)
CREATE POLICY "Allow public insert access" ON newsletter_subscribers
  FOR INSERT TO anon, authenticated WITH CHECK (true);

-- Add a comment to the table
COMMENT ON TABLE newsletter_subscribers IS 'Stores email addresses of newsletter subscribers';
