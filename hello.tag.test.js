describe('hello.tag', function () {
  var tag;

  beforeEach(function () {
    document.body.innerHTML = '<hello></hello>';
    tag = riot.mount('hello')[0];
  });

  it('shows hello world', function () {
    expect(tag.root.querySelector('h1')
      .textContent).toBe('Hello World!');
  });

  it('displays 2 names', function() {
    expect(tag.root.querySelectorAll('li').length).toBe(2);
  });

  it('adds a new person', function () {
    tag.add.click();
    expect(tag.root.querySelectorAll('li').length).toBe(3);
  });
});