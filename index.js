import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.12.0"

const supabaseUrl = 'https://abxjpvfkqrpphlgaiosn.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFieGpwdmZrcXJwcGhsZ2Fpb3NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkzNjAzNDYsImV4cCI6MTk5NDkzNjM0Nn0.0ldX3JshduFq6ccqMOD7w3SgBH4h4kTRdk0yHxgbFvI'

const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
  .from('books')
  .select('*')

  for (let book of books) {
    let bookList = document.getElementById('books');
    bookList.innerHTML += `<tr><td>${book.title}</td<td>${book.author}</td><td>${book.description}</td></tr>`;
  }
}

getBooks();