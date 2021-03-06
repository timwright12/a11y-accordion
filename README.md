# Accessible Accordion Menu

This is a plugin to help you create accessible accordion menus with minimal work. [Check out the demo](https://timwright12.github.io/a11y-accordion/)

## Example HTML You'll Need

```html
<div class="accordion" data-action="accordion" data-state="open">

	<div class="accordion__content" aria-label="Content 4">
		Content
	</div><!--/.accordion__content-->

	<div class="accordion__content" id="content-5">
		Content
	</div><!--/.accordion__content-->

	<div class="accordion__content" aria-label="Content 6">
		Content
	</div><!--/.accordion__content-->

</div><!--/.accordion-->
```

## Options and HTML Requirements

### data-action="accordion"

This is a required attribute. It allows the plugin to initialize on the accordion instance.

### data-state="open"

Us the `data-state` attribute if you want the first item in the accordion to be open my default.

### aria-label

The `aria-label` attribute is used to fill out the accordion trigger content. While it isn't required, it's highly recommended, because the plugin will auto-generate a pretty terrible one for you otherwise.

### ID

Adding ad ID to `.accordion__content` makes it a little easier for the JavaScript to hook up, but it's not required. If no ID is set, the plugin will generate one.

### Classes

The `accordion` class is not required, but the `accordion__content` one is.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -m 'Added some great feature!'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## Credits

- [Tim Wright](http://github.com/timwright12) ( [@csskarma](http://twitter.com/csskarma) )

## License

Code and documentation are released under the MIT license.

## Browser support

| Feature       | Chrome | Firefox | Internet Explorer | Safari |
|---------------|--------|---------|-------------------|--------|
| Basic Support | Latest | Latest  | 8+                | 5.1+   |

Chrome and Firefox update too much to go back and test each version, if you need a certain on tested, just let me know. Or if there's a bug somewhere, feel free to file an issue and I'll fix it.
