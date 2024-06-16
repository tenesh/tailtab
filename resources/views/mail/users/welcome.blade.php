<x-mail::message>
    <h1>Hi {{$name}},</h1>
    <p>Welcome to {{ Str::ucfirst(config('app.name')) }}! We're thrilled to have you on board.</p>
    <p>At {{ Str::ucfirst(config('app.name')) }}, we’re dedicated to helping you manage your time and projects more efficiently. Whether you’re tracking tasks, planning your projects, or just looking to stay organized, we’ve got you covered.</p>
    <p>
        Thanks,<br>
        The {{ Str::ucfirst(config('app.name')) }} Team
    </p>
</x-mail::message>