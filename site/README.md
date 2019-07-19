# Sample

## `🎉.json`

Code:

```vue
<table>
<thead>
<th>Column 1</th>
<th>Column 2</th>
<th>Column 3</th>
</thead>
<tr v-for="i in tada">
<td>{{ i["column1"] }}</td>
<td>{{ i["column2"] }}</td>
<td>{{ i["column3"] }}</td>
</tr>
</table>
```

<table>
<thead>
<th>Column 1</th>
<th>Column 2</th>
<th>Column 3</th>
</thead>
<tr v-for="i in tada">
<td>{{ i["column1"] }}</td>
<td>{{ i["column2"] }}</td>
<td>{{ i["column3"] }}</td>
</tr>
</table>

## `name this however you want.json`

Code:

```vue
<table>
<thead>
<th>Column 1</th>
<th>Column 2</th>
<th>Column 3</th>
</thead>
<tr v-for="i in thisTable">
<td>{{ i["column1"] }}</td>
<td>{{ i["column2"] }}</td>
<td>{{ i["column3"] }}</td>
</tr>
</table>
```

<table>
<thead>
<th>Column 1</th>
<th>Column 2</th>
<th>Column 3</th>
</thead>
<tr v-for="i in thisTable">
<td>{{ i["column1"] }}</td>
<td>{{ i["column2"] }}</td>
<td>{{ i["column3"] }}</td>
</tr>
</table>

## `posts.json`

This is an instance of how a spreadsheet can act as a simple CMS.

Code:

```vue
<section v-for="i in posts">
<h2>{{ i["Heading"] }}</h2>
<h3>{{ i["Subhead"] }}</h3>
<span>{{ i["Keywords"] }}</span>
<p>{{ i["Content"] }}</p>
</section>
```

:::tip
<section v-for="i in posts">
<h3>{{ i["Heading"] }}</h3>
<h4>{{ i["Subhead"] }}</h4>
<span>{{ i["Keywords"] }}</span>
<p>{{ i["Content"] }}</p>
</section>
:::

## Import Code

Import json files by including this in your `.md` file.

```javascript
<script>
import tada from '../xlsx_data/🎉.json'
import thisTable from '../xlsx_data/name this however you want.json'

export default {
  data () {
      return {
          tada: tada,
          thisTable: thisTable
      }
  }
}
</script>
```

<!-- This does not render. You should import only the tables/json files you need. -->
<script>
import tada from '../xlsx_data/🎉.json'
import thisTable from '../xlsx_data/name this however you want.json'
import posts from '../xlsx_data/posts.json'

export default {
  data () {
      return {
          tada: tada,
          thisTable: thisTable,
          posts: posts
      }
  }
}
</script>
