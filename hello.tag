<hello>
  <h1>Hello {opts.who}!</h1>

  <ul if="{people}">
    <li each="{p, i in people}">
      {p.name}
      <button onclick="{remove}">Remove</button>
    </li>
  </ul>

  <button name="add" onclick="{addPerson}">Add more</button>

  <script>
    this.people = [{name: 'Anton'}, {name: 'Kirill'}];

    addPerson(e) {
      this.people.push({name: 'Vasja'});
    }

    remove(e) {
      this.people.splice(e.item.i, 1);
    }
  </script>
</hello>
