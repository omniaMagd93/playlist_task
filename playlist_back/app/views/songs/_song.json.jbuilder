json.extract! song, :id, :song_name, :singer_id, :created_at, :updated_at
json.url song_url(song, format: :json)
