---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
<ul style="list-style-type: none; padding: 0;">
{% for view in site.data.settings %}
    <li style="margin-bottom: 20px; padding: 10px; border: 1px solid #ccc; box-shadow: 0 2px 4px rgba(0,0,0,0.15);">
        <a href= "{{site.url}}/{{ view[1].url }}" style="text-decoration: none; color: inherit; display: block">
            <strong>Name:</strong> {{ view[1].name }}
            <br>
            <strong>Update Interval:</strong> {{ view[1].update }} seconds
            <br>
            <strong>Image Folders:</strong>
            <span style="display: inline-block; padding: 3px; background-color: #f0f0f0; border-radius: 3px;">
                {% for folder in view[1].folders %}
                    {{ folder }}
                    {% if forloop.last == false %}, {% endif %}
                {% endfor %}
            </span>
        </a>
    </li>
{% endfor %}
</ul>



