+++
title = "Users"
description = "List of users and their resumes."
draft = false
+++

# Users

Browse through all user resumes below.

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {{ range .Pages }}
    {{ partial "resume-card.html" . }}
  {{ end }}
</div>
